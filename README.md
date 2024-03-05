# training-workshop-performance

- Tailwind to big
- Images to big 
    Home page with big image
    Product page - lijst van producten (grote images)
       - REST API 
         - JSON producten + image base64

         [
            { 
              name: 'xxxxx', 
              other: 'xxxxx', 
              imageFile: 'myImage.jpg'
            }
         ] 

```
const fs = require('fs');
const contents = fs.readFileSync('/path/to/file.jpg', {encoding: 'base64'});
```

        - /api/products 
  
            [
              { 
              name: 'xxxxx', 
              other: 'xxxxx', 
              image: base64(xxxxx)
              }
            ] 
        - react - axios - data ophalenn en lijst met images tonen (image op pagina 40x40)
        - https://elmah.io/tools/base64-image-encoder/

  Optimized way

  [
    { 
    name: 'xxxxx', 
    other: 'xxxxx', 
    imageUrl: http://localhost:3000/images/myImage.jpg
    }
  ] 

  - fetch 
  - image optimize in size and quality https://squoosh.app/


