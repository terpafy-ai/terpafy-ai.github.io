#!/usr/bin/env python3
"""Extract design tokens from Figma API JSON responses."""
import json
import sys

def rgb_to_hex(r, g, b):
    return '#{:02x}{:02x}{:02x}'.format(int(r*255), int(g*255), int(b*255))

def extract_colors(node, path=''):
    results = []
    name = node.get('name', '')
    fills = node.get('fills', [])
    node_type = node.get('type', '')

    for fill in fills:
        if fill.get('type') == 'SOLID' and fill.get('visible', True):
            c = fill['color']
            hex_val = rgb_to_hex(c['r'], c['g'], c['b'])
            opacity = fill.get('opacity', c.get('a', 1.0))
            results.append((name, hex_val, opacity, node_type, node.get('id', '')))

    for child in node.get('children', []):
        results.extend(extract_colors(child, f'{path}/{name}'))
    return results

def extract_text_styles(node, path=''):
    results = []
    name = node.get('name', '')
    node_type = node.get('type', '')

    if node_type == 'TEXT':
        style = node.get('style', {})
        if style:
            font_family = style.get('fontFamily', '')
            font_size = style.get('fontSize', '')
            font_weight = style.get('fontWeight', '')
            line_height = style.get('lineHeightPx', '')
            letter_spacing = style.get('letterSpacing', '')
            text_case = style.get('textCase', '')
            results.append({
                'name': name,
                'fontFamily': font_family,
                'fontSize': font_size,
                'fontWeight': font_weight,
                'lineHeight': line_height,
                'letterSpacing': letter_spacing,
                'textCase': text_case,
                'id': node.get('id', ''),
            })

    for child in node.get('children', []):
        results.extend(extract_text_styles(child, f'{path}/{name}'))
    return results

def extract_effects(node, path=''):
    results = []
    name = node.get('name', '')
    effects = node.get('effects', [])

    for effect in effects:
        results.append({
            'name': name,
            'type': effect.get('type', ''),
            'color': effect.get('color', {}),
            'offset': effect.get('offset', {}),
            'radius': effect.get('radius', 0),
            'spread': effect.get('spread', 0),
            'visible': effect.get('visible', True),
        })

    for child in node.get('children', []):
        results.extend(extract_effects(child, f'{path}/{name}'))
    return results


if __name__ == '__main__':
    mode = sys.argv[1] if len(sys.argv) > 1 else 'colors'
    node_id = sys.argv[2] if len(sys.argv) > 2 else None

    data = json.load(sys.stdin)

    if node_id:
        node = data['nodes'][node_id]['document']
    else:
        node = data

    if mode == 'colors':
        colors = extract_colors(node)
        seen = set()
        for name, hex_val, opacity, ntype, nid in sorted(colors, key=lambda x: x[1]):
            key = (hex_val, name)
            if key not in seen and hex_val != '#ffffff':
                seen.add(key)
                op_str = f' (opacity: {opacity:.0%})' if opacity < 1.0 else ''
                print(f'{hex_val}{op_str} | {ntype}: {name} [{nid}]')

    elif mode == 'text':
        styles = extract_text_styles(node)
        for s in styles:
            print(f"{s['fontFamily']} {s['fontWeight']} {s['fontSize']}px "
                  f"(lh: {s['lineHeight']:.1f}px, ls: {s['letterSpacing']}px) "
                  f"| {s['name']} [{s['id']}]")

    elif mode == 'effects':
        effects = extract_effects(node)
        for e in effects:
            if e['visible']:
                c = e.get('color', {})
                hex_val = rgb_to_hex(c.get('r', 0), c.get('g', 0), c.get('b', 0)) if c else 'none'
                print(f"{e['type']} radius={e['radius']} spread={e['spread']} "
                      f"offset=({e['offset'].get('x', 0)}, {e['offset'].get('y', 0)}) "
                      f"color={hex_val} | {e['name']}")

    elif mode == 'tree':
        def print_tree(n, indent=0):
            ntype = n.get('type', '')
            name = n.get('name', '')
            nid = n.get('id', '')
            print(f"{'  ' * indent}{nid}: {name} ({ntype})")
            for child in n.get('children', []):
                print_tree(child, indent + 1)
        print_tree(node)
