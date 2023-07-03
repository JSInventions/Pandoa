```
.^._.^. ,###,  ,###,  #,   # ####, ,###, ,###,       -- ,---,   .------------.
| ^o^ | #   || #___#  ##,  # #   # #   # #___#       || |      |             |
| _-" | ####"  #####  #"#, # #   # #   # #####       || "---, <  Since 2023! |
|/ _ \| #"     #"`"#  # "#,# #   # #   # #   #   ,__,||     |  |             |
|_| |_| #      #   #  #  "## ####" "###" #   # @ *--"   "---"   *-----------*
```
<p align=center>An very new JavaScript optimizer 🚀</p>
<p align=center><b>Similar to the Google Closure Compiler</b></p>
<p align=center>Made by <a href="https://github.com/WojtekCodesToday">@WojtekCodesToday</a> and the <a href="https://github.com/JSInventions">JS Inventions</a>.</p>

# Features
**Pandoa** allows to:
- **Optimize** JS code, making it faster,
- **Remove** JSDoc and plain JS comments, ("/\*\* text \*/" and "//text")
- **Solve** basic math\*, allowing to optimize a lot *(such as 1/4\*7+8-3 replacing it with 0.75)*,
- **Minify** math, JSON and JS functions,
- Deobfuscation **JS** code,
- Can be used **anywhere**\*\* if it supports JS,
- The library is written in **pure** JS, compared to Google's Closure Compiler being half written in [Java][java].

**Pandoa** dosen't allow (yet):
- **Compiling/Transpiling** JSX/TS code.
- **Error checking** on unused ESM, globals.
- **`eval()`** warnings.
- **outdated** functionality warnings.
- **Babel-like** compiler.


<h1></h1>

\* That have operators and numbers, **no advanced math or the Math object**.

\*\* **Not** talking about other files than `index.js` in the source code.

[java]: https://javascriptisnotjava.com