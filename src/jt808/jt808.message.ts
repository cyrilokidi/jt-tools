import { JT808Error } from "./jt808.error";
import { JT808Tools } from "./jt808.tools";

export class JT808Message {
    readonly data: string;

    constructor(data: Buffer) {
        const deserialized = JT808Tools.deserialize(data);

        if (JT808Tools.calcCheckCode(deserialized) !== 0)
            throw new JT808Error('Invalid message.');

        this.data = deserialized;
    }
}