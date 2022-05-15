1.  Break UI
2.  Build Static version ( only props )
3.  Representation Of UI State
    What is the state?

- Is it passed in from a parent via props? If so, probably isn't state.
- Does it remain unchanged over time? If so, it probably isn't state.
- Can you compute it based on any other state or props in your component? If so, it isn't state.

4.  Where your state should live?
5.  Add Inverse Data Flow
