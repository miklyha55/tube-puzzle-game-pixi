import GameObject from "../../core/gameObject/GameObject";

import Title from "../ui/Title";
import Button from "../ui/Button";

export default class Menu extends GameObject {
    constructor() {
        super({
            landscape: {
                scale: {
                    x: 1,
                    y: 1,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            },
            portrait: {
                scale: {
                    x: 1,
                    y: 1,
                },
                relativePosition: {
                    x: 0.5,
                    y: 0.5,
                }
            }
        });
    }

    override onInit(): void {
        const title: Title = new Title();
        const button: Button = new Button();

        this.addChild(title);
        title.init();
        
        this.addChild(button);
        button.init();
    }
}