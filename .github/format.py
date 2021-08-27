#!/usr/bin/env python3
import os
import re
import sys


def add_space(x):
  print(repr(x), end=" -> ")
  x = x[0] + " " + x[1]
  print(repr(x))
  return x


def change_dot(x):
  print(repr(x), end=" -> ")
  x = x[0] + "．"
  print(repr(x))
  return x


def kill_space(x):
  print(repr(x), end=" -> ")
  x = x.replace(" ", "")
  print(repr(x))
  return x


def handle(full_path: str):
  print(full_path)
  with open(full_path, "r", encoding="utf-8") as fp:
    content = fp.read()
  content = re.sub("[0-9a-zA-Z][|\u4e00-\u9fa5]",
                   lambda x: add_space(x.group(0)), content)
  content = re.sub("[|\u4e00-\u9fa5][0-9a-zA-Z]",
                   lambda x: add_space(x.group(0)), content)
  content = re.sub("[0-9a-zA-Z%][。]",
                   lambda x: change_dot(x.group(0)), content)
  content = re.sub("[，。；：？！”）] ",
                   lambda x: kill_space(x.group(0)), content)
  content = re.sub(" [，。；：？！“（]",
                   lambda x: kill_space(x.group(0)), content)
  content = re.sub("^[ ]+$", "", content)
  content = re.sub(" MtF ", " MtF ", content, flags=re.IGNORECASE)
  content = re.sub(" LGBT ", " LGBT ", content, flags=re.IGNORECASE)
  content = re.sub(" QQ ", " QQ ", content, flags=re.IGNORECASE)
  content = re.sub("\n\n\n", "\n\n", content)
  with open(full_path, "w", encoding="utf-8") as fp:
    fp.write(content)


def walk_all_files(base: str):
  print(base)
  for root, dirs, files in os.walk(base):
    for file in files:
      full_path = os.path.join(root, file)
      full_path: str
      if full_path.endswith('.md'):
        handle(full_path)


def main():
  if len(sys.argv) < 2:
    walk_all_files(os.getcwd())
  else:
    walk_all_files(sys.argv[1])


if __name__ == '__main__':
  main()
