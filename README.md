# Angular Modal Engine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Content projection into Taco Modal

All the content is being passed into the modal via the ng-template that lives inside of the angular modal engine.

This ng-template is wrapped by the taco-modal component-projection slot that will project all the components content into taco-modal


## Properties and methods available to Taco Modal :

title - Modal title copy ( headerText )

body - Modal body copy ( bodyText )

type="component-projection" - Modal content projection slot

actionLabel - Modal submit button copy ( confirmText)

secondaryActionLabel - Modal cancel button copy ( secondaryActionLabel)

tacoComponentModalConfirm - Modal method to handle save ( handleConfirm() )

tacoComponentModalClose - Modal method to handle cancel
