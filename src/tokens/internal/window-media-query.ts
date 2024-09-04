import plugin from "tailwindcss/plugin";
import type { IProvider } from "../../declaration/provider.interface";
import { Tokens } from "../../declaration/token.interface";
import { Strings } from "../../utils/strings";
import type { IWindowSizing } from "./sizing";

class DefaultWindowMediaQueryTokens extends Tokens<IWindowSizing> {
    protected readonly compact = '@media (max-width: 600px)'
    protected readonly medium = '@media (min-width: 600px) and (max-width: 840px)'
    protected readonly expanded = '@media (min-width: 840px) and (max-width: 1200px)'
    protected readonly large = '@media (min-width: 1200px) and (max-width: 1600px)'
    protected readonly extraLarge = '@media (min-width: 1600px)'

    public get values() {
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
            for (const mq of Object.entries(this.values)) {
                addVariant(Strings.toKebabCase(mq[0]), mq[1])
            }
        })
    }

}
