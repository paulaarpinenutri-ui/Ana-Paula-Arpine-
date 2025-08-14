import re
from pathlib import Path


def test_index_html_contains_required_elements():
    content = Path('index.html').read_text(encoding='utf-8')

    assert re.search(r'<meta[^>]*charset=["\']?utf-8["\']?', content, re.IGNORECASE)
    assert re.search(r'<h1>\s*Site da Ana Paula Arpine\s*</h1>', content)
