import { Engine, IChapter, Mode, Modes, vars } from '@src/engine';
import { Bitmap } from '@src/engine/modes/Bitmap';
import { Feed } from '@src/engine/modes/Feed';
import { Terminal, TerminalPromptFormats } from '@src/engine/modes/Terminal';

import Bitmaps from './Bitmaps';
import Characters from './Characters';
import Variables from './Variables';

import cMedicine from './000-Medicine';
import cSex from './000-Sex';

const chapter: IChapter = [
  Mode.set(Modes.Terminal),
  Terminal.text('Welcome to Muniverse.'),
  Terminal.loading(2),
  Terminal.text(''),
  Terminal.text('Obtaining authentication key'),
  Terminal.loading(2),
  Terminal.moveLine(-1),
  Terminal.text(vars`Authentication key: ${Variables.Player1.AuthKey}.`),
  Engine.wait(2),
  Terminal.text(''),
  Terminal.text('Please identify yourself: '),
  Terminal.prompt(Variables.Player1.Name, {
    accept: /[a-z0-9-_]+/,
    format: TerminalPromptFormats.Text,
  }),
  Terminal.text(''),
  Terminal.text('Locating Thomas'),
  Terminal.loading(2),
  Terminal.moveLine(-1),
  Terminal.text('Thomas location: {TODO: Futuristic location}'),
  Engine.wait(1),
  Terminal.text(''),
  Terminal.text('Switching to live feed.'),
  Terminal.loading(3),

  Mode.set(Modes.Bitmap),
  Bitmap.image(Bitmaps.ScreensTriangle),
  Engine.wait(2),

  Mode.set(Modes.Feed),
  Feed.objects([
    /* TODO: Add art for city view */
  ]),
  Engine.wait(2),

  Feed.captionSource(Characters.Mind),
  Feed.caption('because I love this city.'),
  Feed.caption("I can't believe there are still birds in this world."),
  Feed.caption('And they are already up. Like me.'),
  Feed.caption('What time is it?'),

  Feed.captionSource(Characters.God),
  Feed.caption("It's {TODO: Futuristic time}."),

  Feed.captionSource(Characters.Mind),
  Feed.caption('Yeah, too early.'),
  Engine.wait(2),

  Feed.objects([
    /* TODO: Add art for city view */
  ]),
  Engine.wait(2),

  Feed.objects([
    /* TODO: Add art for room view */
  ]),

  Feed.captionSource(Characters.Mind),
  Feed.caption('I can barely remember their faces. Their names.'),
  Feed.caption('Sex was good.'),
  Feed.caption('I mean, it was different. Yeah, different.'),
  Feed.caption("That's why I came back anyway."),
  Feed.caption(
    "That's why I left the last city. And the one before. So many places.",
  ),
  Feed.caption(
    "Ugh. I'm so tired. My {TODO: Substance} levels must be low again.",
  ),
  Feed.caption("God, how's my overall health?"),

  Feed.captionSource(Characters.God),
  Feed.caption('{TODO: Health report}'),
  Feed.forkStory([
    { label: 'Recommend taking supplement', chapter: cMedicine },
    { label: 'Recommend having sex', chapter: cSex },
  ]),

  Mode.set(Modes.Bitmap),
  Bitmap.image(Bitmaps.ScreensTriangle),
  Engine.wait(2),

  Mode.set(Modes.Terminal),
  Terminal.moveLine(-1),
  Terminal.text('Live feed interrupted.'),
  Engine.wait(1),

  Terminal.text(''),
  Terminal.text('No choice was selected.'),
  Terminal.text(''),
  Terminal.text('Mission aborted.'),
];

export default chapter;
