# Workers vs thread benchmark

### Results without worker
![image](https://user-images.githubusercontent.com/6231516/36636208-4568652e-19ca-11e8-919b-36e54f3b29b9.png) 

### [greenlet](https://github.com/developit/greenlet) results:
![image](https://user-images.githubusercontent.com/6231516/36636171-86af6920-19c9-11e8-96ea-12854c514461.png)

### [Clooney](https://github.com/GoogleChromeLabs/clooney) results:
![image](https://user-images.githubusercontent.com/6231516/36636182-ce9cccaa-19c9-11e8-9c95-3048fa23c1c0.png)

P.S. greenlet and Clooney are have pretty the same results (sometimes Clooney is faster), so ignore value from console on screenshot.

### Results from `npm test`

````
0: JSHandle:When user input while browser handle heavy stuff, main thread is busy for 937.6000000047497 milliseconds
0: JSHandle:When user input while greenlet handle heavy stuff, main thread is busy for 0.20000000949949026 milliseconds
0: JSHandle:When user input while Clooney handle heavy stuff, main thread is busy for 0.19999999494757503 milliseconds

````