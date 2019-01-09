export interface IInstruction {}

export type IChapter = IInstruction[];

export interface ICharacter {}

export interface IForkChoices {}

export const Engine = {
  vars(string: TemplateStringsArray, ...expressions: any): string {
    return '';
  },

  wait(seconds: number): IInstruction {
    return {};
  },
};

export const Mode = {
  set(mode: Modes): IInstruction {
    return {};
  },
};

export enum Modes {
  Bitmap = 'Bitmap',
  Feed = 'Feed',
  Terminal = 'Terminal',
}

export const vars = Engine.vars;
