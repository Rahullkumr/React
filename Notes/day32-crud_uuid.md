# 06 - Jan - 2025

- id: Date.now()
- other way for creating unique id
    - install uuid from npm 
        - import {v4 as uuidv4} from 'uuid'
        - id: uuidv4();

- find() ==> will search the required item and returns back the first item and does not check remaining items

- task:
    - create different components for each task

    - components should be:
        - form: two input and 1 button
        - handleChange
        - handleSubmit
        - handleUpdate
        - handleDelete
        - display/map
        - all components in one file maybe crudintro.jsx

=================================

## forwardRef() hoc

- kya chahiye mujhe:
    - button click pe h1 ka background change ho jaye using useRef hook but from the child component

- ref ko child se parent me forward karne ka technique h forwardRef()

## HOC (Higher Order Components)

- HOC are the components that take another component as an argument 
- eg: React.memo()
- we can create our own HOCs, see loader example 