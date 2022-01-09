var images = ["flower.jpeg","family.jpeg","father.jpg","mother.jpg","brother.jpg","sister.jpg","grandfather.jpg","grandma.jpg"];

var names = ["flowers","our family","dad","mom","brother","sister","grandfather","grandmother"];

var p = 0;
function Nextslide()
{
    p++;
    var numbers_of_family_member_in_array = 7;
    if(p> numbers_of_family_member_in_array)
      {
          p = 0;
          p++;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updated_image = images[p];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updated_name = names[p];
 
    document.getElementById("family").src = updated_image;
    document.getElementById("faname").innerHTML = updated_name;
}
