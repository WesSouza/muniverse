import { ICharacter, IForkChoices, IInstruction } from '../Engine';

export enum CaptionPositions {
  BottomCenter = 'BottomCenter',
  BottomLeft = 'BottomLeft',
  BottomRight = 'BottomRight',
  Default = 'Default',
  TopCenter = 'TopCenter',
  TopLeft = 'TopLeft',
  TopRight = 'TopRight',
}

export const Feed = {
  caption(caption: string, options: ICaptionOptions = {}): IInstruction {
    return {};
  },

  captionSource(character: ICharacter): IInstruction {
    return {};
  },

  forkStory(
    choices: IForkChoices[],
    options: IForkStoryOptions = {},
  ): IInstruction {
    return {};
  },

  objects(objects: any[] /* TODO: Define interface */): IInstruction {
    return {};
  },
};

interface ICaptionOptions {
  position?: CaptionPositions;
}

interface IForkStoryOptions {
  wait?: number;
}
