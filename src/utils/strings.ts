export class Strings {
    public static toKebabCase(str: string) {
        return str
            .split('')
            .map((letter, idx) => {
                return letter.toUpperCase() === letter
                    ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
                    : letter;
            })
            .join('');
    }
}
