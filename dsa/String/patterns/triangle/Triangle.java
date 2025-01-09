package String.patterns.triangle;

class Triangle{
    public static void main(String[] args){
        int n = 5;
        for(int i=0; i<n; i++){
            String pattern = "";
            for(int k=0; k<i; k++){
                pattern += "   ";
            }

            for(int j=0; j<n-i; j++){
                pattern += " * ";
            }
            System.out.println(pattern);
        }
    }
}