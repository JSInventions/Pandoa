const back = {
    eME(op1, op, op2) {
        const n1 = parseFloat(op1),
        n2 = parseFloat(op2);
        if (isNaN(n1) || isNaN(n2)) return null;
        switch (op) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '*': return n1 * n2;
            case '/': return n1 / n2;
            default: return null;
        }
    },
}
/** Pandoa is an Google Closure alternative written in pure JS to upgrade JS input. */
const pandoa = {
    closure(inp) {
        let out = inp;
        while (true) {
            const pOp = out;
            out = out
                .replace(/([\d.]+)\s*([+\-*/])\s*([\d.]+)/g, (_, op1, op, op2) => {
                    const r = back.eME(op1, op, op2);
                    return r !== null ? r.toString() : _;
                });
            if (out === pOp) {
                break;
            }
        }
        out = out.replace(/[\r\n]+/g, ';')
            .replace(/;+$/, '').replace(/(\))\s*(\{)/g, '$1$2').replace(" => ", "=>").replace("[\n", "[")
            .replace("\n]", "]").replace("{\n", "{").replace("\n}", "}").replace(",\n", ",")
            .replace(", ", ",").replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').replace(" ;", ";")
            .replace(/ = /g, '=').replace(/ - /g, '-').replace(/ \+ /g, '+').replace(/ \/ /g, '/')
            .replace(";}", "}").replace(") {", "){");
        return out;
    },
};

export default pandoa;