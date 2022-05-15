Compiler is a process: A -> B
Example: Javascript -> C

A Compiler usually have three stages: Parsing, Transformation, and Code Generation.

1. _Parsing_ is taking row code and turning it into a more abstract representation of the code.
2. _Transformation_ takes this abstract representation and manipulates to do whatever the compiler wants it ro.
3. _Code Generation_ takes the transformed representation of the code and turns it into new code.

## Parsing

Parsing typically gets broken down into two phases: Lexical Analysis and Syntactic Analysis.
Lexical analysis -> Tokenizer
Syntactic Analysis -> AST (Abstract Syntax Tree)

## Transformation

This just takes the AST from the last step and makes changes to it. It can manipulate the AST in the same language or it can translate it into an entirely new language.

## Traversal

We want manipulate NODE in AST -> We must traversal to all node in AST. In traversal, we can adding/removing/replacing AST NODE.

## Visitor

Save all status when we traversal node in AST.

## Code Generation
