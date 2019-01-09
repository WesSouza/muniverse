import { IInstruction } from '../Engine';

export const Terminal = {
  loading(seconds: number): IInstruction {
    return {};
  },
  moveLine(lines: number): IInstruction {
    return {};
  },
  prompt(text: string, options: IPromptOptions = {}): IInstruction {
    return {};
  },
  text(text: string, options: ITextOptions = {}): IInstruction {
    return {};
  },
};

export enum TerminalPromptFormats {
  Number = 'Number',
  Text = 'Text',
}

interface IPromptOptions {}

interface ITextOptions {}
