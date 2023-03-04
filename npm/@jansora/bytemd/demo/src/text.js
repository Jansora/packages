export const content =  "---\n" +
    "# frontmatter: https://jekyllrb.com/docs/front-matter/\n" +
    "layout: post\n" +
    "title: Blogging Like a Hacker\n" +
    "---\n" +
    "\n" +
    "## Markdown Basic Syntax\n" +
    "\n" +
    "I just love **bold text**. Italicized text is the _cat's meow_. At the command prompt, type `nano`.\n" +
    "\n" +
    "My favorite markdown editor is [ByteMD](https://github.com/bytedance/bytemd).\n" +
    "\n" +
    "1. First item\n" +
    "2. Second item\n" +
    "3. Third item\n" +
    "\n" +
    "> Dorothy followed her through many of the beautiful rooms in her castle.\n" +
    "\n" +
    "```js\n" +
    "import gfm from '@bytemd/plugin-gfm'\n" +
    "import { Editor, Viewer } from 'bytemd'\n" +
    "\n" +
    "const plugins = [\n" +
    "  gfm(),\n" +
    "  // Add more plugins here\n" +
    "]\n" +
    "\n" +
    "const editor = new Editor({\n" +
    "  target: document.body, // DOM to render\n" +
    "  props: {\n" +
    "    value: '',\n" +
    "    plugins,\n" +
    "  },\n" +
    "})\n" +
    "\n" +
    "editor.on('change', (e) => {\n" +
    "  editor.$set({ value: e.detail.value })\n" +
    "})\n" +
    "```\n" +
    "\n" +
    "## GFM Extended Syntax\n" +
    "\n" +
    "Automatic URL Linking: https://github.com/bytedance/bytemd\n" +
    "\n" +
    "~~The world is flat.~~ We now know that the world is round.\n" +
    "\n" +
    "- [x] Write the press release\n" +
    "- [ ] Update the website\n" +
    "- [ ] Contact the media\n" +
    "\n" +
    "| Syntax    | Description |\n" +
    "| --------- | ----------- |\n" +
    "| Header    | Title       |\n" +
    "| Paragraph | Text        |\n" +
    "\n" +
    "## Footnotes\n" +
    "\n" +
    "Here's a simple footnote,[^1] and here's a longer one.[^bignote]\n" +
    "\n" +
    "[^1]: This is the first footnote.\n" +
    "[^bignote]: Here's one with multiple paragraphs and code.\n" +
    "\n" +
    "    Indent paragraphs to include them in the footnote.\n" +
    "\n" +
    "    `{ my code }`\n" +
    "\n" +
    "    Add as many paragraphs as you like.\n" +
    "\n" +
    "## Gemoji\n" +
    "\n" +
    "Thumbs up: :+1:, thumbs down: :-1:.\n" +
    "\n" +
    "Families: :family_man_man_boy_boy:\n" +
    "\n" +
    "Long flags: :wales:, :scotland:, :england:.\n" +
    "\n" +
    "## Math Equation\n" +
    "\n" +
    "Inline math equation: $a+b$\n" +
    "\n" +
    "$$\n" +
    "\\displaystyle \\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)\n" +
    "$$\n" +
    "\n" +
    "## Mermaid Diagrams\n" +
    "\n" +
    "```mermaid\n" +
    "graph TD\n" +
    "Start --> Stop\n" +
    "```\n" +
    "\n" +
    "```mermaid\n" +
    "sequenceDiagram\n" +
    "Alice->>John: Hello John, how are you?\n" +
    "John-->>Alice: Great!\n" +
    "Alice-)John: See you later!\n" +
    "```\n" +
    "\n" +
    "\n" +
    "```mermaid\n" +
    "classDiagram\n" +
    "Animal <|-- Duck\n" +
    "Animal <|-- Fish\n" +
    "Animal <|-- Zebra\n" +
    "Animal : +int age\n" +
    "Animal : +String gender\n" +
    "Animal: +isMammal()\n" +
    "Animal: +mate()\n" +
    "class Duck{\n" +
    "+String beakColor\n" +
    "+swim()\n" +
    "+quack()\n" +
    "}\n" +
    "class Fish{\n" +
    "-int sizeInFeet\n" +
    "-canEat()\n" +
    "}\n" +
    "class Zebra{\n" +
    "+bool is_wild\n" +
    "+run()\n" +
    "}\n" +
    "```\n" +
    "\n" +
    "\n" +
    "```mermaid\n" +
    "stateDiagram-v2\n" +
    "[*] --> Still\n" +
    "Still --> [*]\n" +
    "\n" +
    "Still --> Moving\n" +
    "Moving --> Still\n" +
    "Moving --> Crash\n" +
    "Crash --> [*]\n" +
    "```\n" +
    "\n" +
    "\n" +
    "```mermaid\n" +
    "erDiagram\n" +
    "CUSTOMER ||--o{ ORDER : places\n" +
    "ORDER ||--|{ LINE-ITEM : contains\n" +
    "CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n" +
    "```\n" +
    "\n" +
    "\n" +
    "```mermaid\n" +
    "journey\n" +
    "title My working day\n" +
    "section Go to work\n" +
    "Make tea: 5: Me\n" +
    "Go upstairs: 3: Me\n" +
    "Do work: 1: Me, Cat\n" +
    "section Go home\n" +
    "Go downstairs: 5: Me\n" +
    "Sit down: 5: Me\n" +
    "```\n" +
    "\n" +
    "```mermaid\n" +
    "gantt\n" +
    "title A Gantt Diagram\n" +
    "dateFormat  YYYY-MM-DD\n" +
    "section Section\n" +
    "A task           :a1, 2014-01-01, 30d\n" +
    "Another task     :after a1  , 20d\n" +
    "section Another\n" +
    "Task in sec      :2014-01-12  , 12d\n" +
    "another task      : 24d\n" +
    "```\n" +
    "\n" +
    "\n" +
    "```mermaid\n" +
    "pie title Pets adopted by volunteers\n" +
    "\"Dogs\" : 386\n" +
    "\"Cats\" : 85\n" +
    "\"Rats\" : 15\n" +
    "```\n" +
    "```mermaid\n" +
    "graph TD;\n" +
    "  A-->B;\n" +
    "  A-->C;\n" +
    "  B-->D;\n" +
    "  C-->D;\n" +
    "```\n"