# Golden Door

## Introduction @unplugged

This tutorial will help you solve your first microbit mystery!

## Step 1 @fullscreen

Drag a 'on Pin0 pressed' block into the work area.

```blocks
input.onPinPressed(TouchPin.P0, function () {
     
})
```


## Step 2 

Now, put a 'check door' custom block inside of the 'on Pin0 pressed' block.

```blocks
input.onPinPressed(TouchPin.P0, function () {
    custom.checkDoor(0)
})
```

## Step 3 

Do the same thing for pin P1, but make sure you're checking door 1.

```blocks
input.onPinPressed(TouchPin.P1, function () {
    custom.checkDoor(1)
})
```

## Step 4 

Do the same thing for pin P2, but check door 2.

```blocks
input.onPinPressed(TouchPin.P2, function () {
    custom.checkDoor(2)
})
```

## Step 5

Did writing this code help you figure out what you need to do to solve the mystery?

Try running the code here and see if you can answer the mystery!  

For extra fun, click ``|Download|`` to transfer your code to your microbit!
