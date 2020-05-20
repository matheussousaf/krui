import * as vscode from "vscode";
import { createMessages } from "../../messages/messages";
import { createUriApi } from "../../services/api";

type Category =
  | "Beginner"
  | "Ad-hoc"
  | "Strings"
  | "Data Structures and Libraries"
  | "Mathematics"
  | "Paradigms"
  | "Graph"
  | "Computational Geometry"
  | "Sql";

export class Problems {
  public async listProblems() {
    const kuriMessages = createMessages();
    const uriApi = createUriApi();

    let optionChoose: string | undefined = undefined;

    const categories: Category[] = [
      "Beginner",
      "Ad-hoc",
      "Strings",
      "Data Structures and Libraries",
      "Mathematics",
      "Paradigms",
      "Graph",
      "Computational Geometry",
      "Sql",
    ];

    const problemId = await vscode.window
      .showQuickPick(categories)
      .then((value) => {
        console.log(value);
        if (!value) {
          kuriMessages.showKuriErrorMessage("Missing an option.");
        }
      });

    const panel = vscode.window.createWebviewPanel(
      `${optionChoose} Problems`,
      `${optionChoose} Problems`,
      vscode.ViewColumn.Two,
      { retainContextWhenHidden: true, enableScripts: true }
    );
  }

  public async getProblem() {
    const kuriMessages = createMessages();
    const uriApi = createUriApi();

    const options: vscode.InputBoxOptions = {
      prompt: "A Problem ID",
      placeHolder: "Type here a problem ID Ex.: 1183",
    };

    const problemId: number | undefined = await vscode.window
      .showInputBox(options)
      .then((value) => {
        if (value) {
          return +value;
        } else {
          kuriMessages.showKuriErrorMessage("Missing problem id.");
        }
      });

    console.log(problemId);

    const panel = vscode.window.createWebviewPanel(
      `${problemId} Problems`,
      "Workspace",
      vscode.ViewColumn.Two,
      { retainContextWhenHidden: true, enableScripts: true }
    );

    if (problemId) {
      const html: string = await uriApi.getProblem(problemId);

      panel.title = `Problem ${problemId}`;
      panel.webview.html = html;
    }
  }
}

export const createProblems = () => new Problems();
