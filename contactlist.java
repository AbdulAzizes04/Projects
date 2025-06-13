import java.util.*;
public class contactList{
    public static void main(String args[]){
        HashMap<String,Long> map=new HashMap<>();
        map.put("azizes", 9392031232L);
        map.put("abdur", 9632587413L);
        map.put("rehamn", 6587421392L);
        map.put("mani", 8523697413L);
        map.put("dharma", 9632574180L);
        map.put("dinesh", 9876541230L);
        map.put("venky", 9848521240L);
        map.put("viraj", 9865321470L);
        map.put("pandit", 9563287410L);
        map.put("deva", 1002233664L);
        map.put("varadha", 8520147963L);
        Scanner sc=new Scanner(System.in);
        System.out.println("enter thr requirements 1 for checking number 2 for checking the name 3 for adding new contact list");
        int n=sc.nextInt();
        switch(n)
        {
            case 1:
                System.out.println("enter the name:");
                String name=sc.next();
                if(map.containsKey(name))
                {
                    System.out.println("The number of "+name+" is "+map.get(name));
                }
                else
                {
                    System.out.println("Name not found in the contact list.");
                }
                break;
            case 2:
                System.out.println("enter the number:");
                long number=sc.nextLong();
                boolean found = false;
                for(Map.Entry<String,Long> entry :map.entrySet()) {
                    if(entry.getValue() == number) {
                        System.out.println("The name corresponding to the number " +number+"is " + entry.getKey());
                        found = true;
                        break;
                    }
                }
                if(!found) {
                    System.out.println("Number not found in the contact list.");
                }
                break;
            case 3:
                System.out.println("Enter the name of the new contact:");
                String newName = sc.next();
                System.out.println("Enter the number of the new contact:");
                long newNumber = sc.nextLong();
                if(!map.containsKey(newName)) {
                    map.put(newName, newNumber);
                    System.out.println("New contact added:"+ newName+"-"+ newNumber);
                } else {
                    System.out.println("Contact already exists.");
                }
                break;
        }

    }
}