const languages = [
  {
    name: "C++",
    type: "cpp",
    snippet:
      '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, write your code here:)" << endl;\n\treturn 0;\n}\n',
  },
  { name: "Python", type: "py", snippet: "print('Hello World!')\n" },
  {
    name: "JavaScript",
    type: "js",
    snippet: "console.log('Hello World!');\n",
  },
  {
    name: "Java",
    type: "java",
    snippet:
      'public class main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World!");\n\t}\n}\n',
  },
];

const URL = "http://44.201.126.0/api/submit/code";

export { languages, URL };
