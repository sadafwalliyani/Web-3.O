// Online C++ compiler to run C++ program online
#include <iostream>

int main() {
    // Write C++ code here
    int a,b;
    
    
    printf("write 1st number:");
    scanf("%d", &a);
    printf("write 2nd number:");
    scanf("%d", &b);
    
    if(a>b){
         printf("your number is greater than %d \n", a);
    }
    

if(b>a)
{
     printf("your number is less than %d \n", b);
}

else{
    printf("your number is same");
}

    return 0;
}