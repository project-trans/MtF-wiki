#!/usr/bin/python3

import re
import os
import sys
dire = ""


def addSpace(x):
    print(x, end=" -> ")
    y = x[0]+" "+x[1]
    print(y)
    return(y)


def changeDot(x):
    print(x, end=" -> ")
    y = x[0]+"．"
    print(y)
    return(y)


def killSpace(x):
    print(x, end=" -> ")
    y = x.replace(" ", "")
    print(y)
    return(y)


pass
if len(sys.argv) < 2:
    dire = os.getcwd()
    print(dire)
else:
    dire = sys.argv[1]
    print(dire)
for root, dirs, files in os.walk(dire):
    for file in files:
        print(os.path.join(root, file))
        if file.split(".")[-1] == "md":
            f = open(os.path.join(root, file), "r", encoding="utf-8")
            content = f.read()
            f.close()
            content = re.sub("[0-9a-zA-Z][\|\u4e00-\u9fa5]",
                             lambda x: addSpace(x.group(0)), content)
            content = re.sub("[\|\u4e00-\u9fa5][0-9a-zA-Z]",
                             lambda x: addSpace(x.group(0)), content)
            content = re.sub("[0-9a-zA-Z%][。]",
                             lambda x: changeDot(x.group(0)), content)
            content = re.sub("[，。；：？！”）] ",
                             lambda x: killSpace(x.group(0)), content)
            content = re.sub(" [，。；：？！“（]",
                             lambda x: killSpace(x.group(0)), content)
            content = re.sub("^[ ]+$", "", content)
            content = re.sub(" [Mm][Tt][Ff] ", " MtF ", content)
            content = re.sub(" [Ll][Gg][Bb][Tt] ", " LGBT ", content)
            content = re.sub(" [Qq][Qq] ", " QQ ", content)                     
            content = re.sub("\n\n\n", "\n\n", content)
            f = open(os.path.join(root, file), "w", encoding="utf-8")
            f.write(content)
            f.close()