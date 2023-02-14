import { GameScene } from './scenes/GameScene';
import { PreloadScene } from './scenes/PreloadScene';
import { AUTO, Game, Types } from "phaser";

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 1280,
  height: 980,
  backgroundColor: '#6e6666',
  scene: [
    PreloadScene,
    GameScene
  ]
}

new Game(config)