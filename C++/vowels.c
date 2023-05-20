// Online C++ compiler to run C++ program online
#include <iostream>

int main() {
    // Write C++ code here
    char a;
    
    
    printf("write any alphabet:");
    scanf("%c", &a);
    
    if(a=='a' || a=='e' ||a=='o' ||a =='i' ||a=='u' ||a=='A'||a=='E'||a=='I'||a=='O' ||a=='U' ){
         printf("your alphabet is vowles %c \n", a);
    }
    

 else{
    printf("your alphabet is consonant");
}

    return 0;
}