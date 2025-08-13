package String.patterns.squire;

public class Squire {
    public static void main(String[] args){
        int n = 5;

        for(int i=0; i<n; i++){
            String pattern = "";
            for(int j=0; j<n; j++){
                pattern += " " + " * ";
            }

            System.out.println(pattern.trim());
        }
    }
}
