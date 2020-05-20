import * as vscode from "vscode";
import { createProblems } from "./functionalities/problems/problems";

export function activate(context: vscode.ExtensionContext) {

  let listProblemsDisposable = vscode.commands.registerCommand(
    "kuri.listProblems",
    () => {
      let editor = vscode.window.activeTextEditor;

      if (editor) {
        let document = editor.document;
        const kuriProblems = createProblems();
        const selection = editor.selection;
        const code =
          selection.start.line !== 0
            ? document.getText(selection)
            : document.getText();

        console.log(code);
        kuriProblems.listProblems();
      }
    }
  );

  let getProblemsDisposable = vscode.commands.registerCommand(
    "kuri.getProblem",
    () => {
      let editor = vscode.window.activeTextEditor;
      const kuriProblems = createProblems();
      kuriProblems.getProblem();
    }
  );

  context.subscriptions.push(listProblemsDisposable);
  context.subscriptions.push(getProblemsDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
