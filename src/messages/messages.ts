import * as vscode from "vscode";

type Message = string;

const KURI_PREFIX_INFO = "🐵 Kuri - ";
const KURI_PREFIX_ERROR = "Kuri - ";

export class Messages {
  constructor() {}

  /**
   * Shows a Kuri personalized information message.
   * @param message The message to be shown.
   */
  public showKuriInfoMessage(message: Message) {
    message
      ? vscode.window.showInformationMessage(`${KURI_PREFIX_INFO + message}`)
      : vscode.window.showInformationMessage(`${KURI_PREFIX_INFO} Empty message.`);
  }
  /**
   * Shows a Kuri personalized error message.
   * @param message The message to be shown.
   */
  public showKuriErrorMessage(message: Message) {
    message
    ? vscode.window.showErrorMessage(`${KURI_PREFIX_ERROR + message}`)
    : vscode.window.showErrorMessage(`${KURI_PREFIX_ERROR} Empty message.`);
  }

  
}

export const createMessages = () => new Messages();
