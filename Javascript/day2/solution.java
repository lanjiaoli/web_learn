class Solution{
    public int findBestValue( int[] arr,  int target) {
        int left = 0;
        int right = 0;
        for ( int num : arr) {
            right = Math.max(right, num);
        }
        while (left < right) {
             int mid = left + (right - left) / 2; // 4 
             int sum = calulateSum(arr, mid); // 11
            if (sum < target) {
                // 严格小于的一定不是解
                left = mid + 1;
            } else {
                right = mid;
            }
            System.out.println("left = " + left);
            System.out.println("sum = " +sum);
            System.out.println("mid = " +mid);
            System.out.println("right = " +right);
            System.out.println("循环");
        }
        int sum1 = calulateSum(arr, left - 1);
        int sum2 = calulateSum(arr, left);
        if (target - sum1 <= sum2 - target) {   
            return left - 1;
        }
        return left;
        
    }

    private int calulateSum( int[] arr,  int threshold) {
        int sum = 0;
        for ( int num : arr) {
            sum += Math.min(num, threshold);
     
        }
        return sum;
    }

    public static void main( String[] args) {
         int[] arr = new int[] { 4, 9, 3 };
         int target = 10;
         Solution solution = new Solution();
         int res = solution.findBestValue(arr, target);
        System.out.println(res);
    }
}
