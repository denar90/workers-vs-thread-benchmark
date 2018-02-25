# Workers vs thread benchmark

Results:

![image](https://user-images.githubusercontent.com/6231516/36646514-246768ae-1a81-11e8-95e3-f1d966b293bf.png)

P.S. greenlet and Clooney have pretty the same results (sometimes Clooney is faster);


## Libs: 
- [greenlet](https://github.com/developit/greenlet)
- [Clooney](https://github.com/GoogleChromeLabs/clooney)


### Results from `npm test`

````
When user input while browser handles heavy stuff, main thread is busy for 974.1999999969266 milliseconds
When user input while greenlet handles heavy stuff, main thread is busy for 0.20000000949949026 milliseconds
When user input while Clooney handles heavy stuff, main thread is busy for 0.5000000091968104 milliseconds
````