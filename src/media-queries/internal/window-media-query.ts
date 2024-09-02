import plugin from "tailwindcss/plugin";
import type { IProvider } from "../../declaration/provider.interface";
import type { IWindowSizing } from "../../declaration/window-sizing.interface";
import { Strings } from "../../utils/strings";

class DefaultWindowMediaQueryTokens implements IWindowSizing {
    compact = '@media (max-width: 600px)'
    medium = '@media (min-width: 600px) and (max-width: 840px)'
    expanded = '@media (min-width: 840px) and (max-width: 1200px)'
    large = '@media (min-width: 1200px) and (max-width: 1600px)'
    extraLarge = '@media (min-width: 1600px)'

    public get defaultTokenRecord() {
        return {
            compact: this.compact,
            medium: this.medium,
            expanded: this.expanded,
            large: this.large,
            extraLarge: this.extraLarge,
        }
    }
}

export class WindowMediaQueryProvider extends DefaultWindowMediaQueryTokens implements IProvider {

    getPlugin() {
        return plugin(({ addVariant }) => {
            for (const mq of Object.entries(this.defaultTokenRecord)) {
                addVariant(Strings.toKebabCase(mq[0]), mq[1])
            }
        })
    }

}
