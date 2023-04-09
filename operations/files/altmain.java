import java.util.*;
import java.io.*;
public class main {
	 	static long mod = 1000000007;
	 	static long pow[];
		static PrintWriter out = new PrintWriter(new BufferedOutputStream(System.out));
		public static void main(String[] args) throws IOException  {
			FastReader sc = new FastReader();
			pow = new long[19];
			pow[0] = 1;
			for( int i =1 ;i<=18; i++) {
				pow[i] = pow[i-1]*10;
			}
			int t = sc.nextInt();
			while( t-- > 0) {
//				long mid = sc.nextLong();
//				long temp = mid -  countNumbersWith4(mid);
//				out.println(temp);
				long k = sc.nextLong();
				long ans = -1;
				long i = 0;
				long j = 1000000000000000L;
				while( i<= j) {
					long mid = (i+j)/2;
					long temp = mid -  countNumbersWith4(mid);
					 if(temp >= k) {
						 if( temp == k) {
						ans = mid;
						 }
						 j = mid-1;
					}
					else {
						i = mid+1;
					}
				}
				out.println(ans);
			}
			out.flush();
		}
		
		static long countNumbersWith4(long n)
		{
		    // Base case
//			out.println(n);
		    if (n < 4)
		        return 0;
		     
		    // d = number of digits minus
		    // one in n. For 328, d is 2
		    int d = (int)Math.log10(n);
		 
		    // computing count of numbers from 1 to 10^d-1,
		    // d=0 a[0] = 0;
		    // d=1 a[1] = count of numbers from
		    // 0 to 9 = 1
		    // d=2 a[2] = count of numbers from
		    // 0 to 99 = a[1]*9 + 10 = 19
		    // d=3 a[3] = count of numbers from
		    // 0 to 999 = a[2]*19 + 100 = 171
		    long[] a = new long[d + 2];
		    a[0] = 0;
		    a[1] = 1;
		 
		    for (int i = 2; i <= d; i++)
		        a[i] = a[i - 1] * 9L + (pow[i-1]);
		 
		    // Computing 10^d
		    long p = (pow[d]);
		 
		    // Most significant digit (msd) of n,
		    // For 328, msd is 3 which can be obtained using 328/100
		    long msd = n / p;
		 
		    // If MSD is 4. For example if n = 428, then count of
		    // numbers is sum of following.
		    // 1) Count of numbers from 1 to 399
		    // 2) Count of numbers from 400 to 428 which is 29.
		    if (msd == 4)
		        return (msd) * a[d] + (n % p) + 1;
		 
		    // IF MSD > 4. For example if n
		    // is 728, then count of numbers
		    // is sum of following.
		    // 1) Count of numbers from 1 to
		    // 399 and count of numbers from
		    // 500 to 699, i.e., "a[2] * 6"
		    // 2) Count of numbers from 400
		    // to 499, i.e. 100
		    // 3) Count of numbers from 700 to
		    // 728, recur for 28
		    if (msd > 4)
		        return (msd - 1) * a[d] + p +
		                countNumbersWith4(n % p);
		 
		    // IF MSD < 4. For example if n is 328, then count of
		    // numbers is sum of following.
		    // 1) Count of numbers from 1 to 299 a
		    // 2) Count of numbers from 300 to 328, recur for 28
		    return (msd) * a[d] + countNumbersWith4(n % p);
		}
		 
		/*
		 * Accept that you maybe thinking wrong
		 * Read the question carefully 
		 * Look at the bigger picture
		 * use the hints
		 * Read the question again
		 * think of binary search
		 * look at test cases
		 * do significant case work 
		 */
		


		static class DSU {
			int[] p, rank, setSize;
			int numSets;
			public DSU(int N) {
				p = new int[numSets = N];
				rank = new int[N];
				setSize = new int[N];
				for (int i = 0; i < N; i++) {
					p[i] = i;
					setSize[i] = 1;
				}
			}
			
			public int findSet(int i) { 
				return p[i] == i ? i : (p[i] = findSet(p[i]));
			}

			public boolean isSameSet(int i, int j) { 
				return findSet(i) == findSet(j);
			}

			public void unionSet(int i, int j) { 
				if (isSameSet(i, j))
					return;
				numSets--;
				int x = findSet(i), y = findSet(j);
				if (rank[x] > rank[y]) {
					p[y] = x;
					setSize[x] += setSize[y];
				} else {
					p[x] = y;
					setSize[y] += setSize[x];
					if (rank[x] == rank[y])
						rank[y]++;
				}
			}	

			public int numDisjointSets() { 
				return numSets;
			}

			public int sizeOfSet(int i) { 
				return setSize[findSet(i)];
			}
				
			public ArrayList<Integer> getParents()
			{
				ArrayList<Integer>pr = new ArrayList<>();
				for(int i=0;i<p.length;i++)
				{
					if(p[i]==i && setSize[i]>2)
						pr.add(i);
				}
				return pr;
			}
		}
		
		 static long power(long x, long y, long p)
		 {
			 long res = 1; 
			 
			 x = x % p; 
			 
			 if (x == 0)
				 return 0; 
		 
			 while (y > 0)
			 {

				 if ((y & 1) != 0)
					 res = (res * x) % p;
				 
				 y = y >> 1; 
                 x = (x * x) % p;
			 }
			 return res%p;
		 }
		 
		 
		public static boolean ifpowof2(long n ) {
			return ((n&(n-1)) == 0);
		}
		
		static boolean isprime(long x ) {
			if( x== 2) {
				return true;
			}
			if( x%2 == 0) {
				return false;
			}
			for( long i = 3 ;i*i <= x ;i+=2) {
				if( x%i == 0) {
					return false;
				}	
			}
			return true;
		}
		
		static boolean[] sieveOfEratosthenes(long n) { 
			boolean prime[] = new boolean[(int)n + 1];
			for (int i = 0; i <= n; i++) {
				prime[i] = true;
			}
			for (long p = 2; p * p <= n; p++) {   
				if (prime[(int)p] == true) {
					for (long i = p * p; i <= n; i += p)
						prime[(int)i] = false;
				}
			}	
			prime[0] = prime[1] = false;
			return prime;
		}
		public List<Integer> goodIndices(int[] nums, int k) {
	        int n = nums.length;
	        int fst[] = nextLargerElement(nums, n);
	        int scnd[] = nextlargerElement(nums, n);
	        List<Integer> ans = new ArrayList<>();
	        for( int i = 0 ;i < n; i++) {
	        	if( fst[i] == -1 || scnd[i] == -1) {
	        		continue;
	        	}
	        	if( fst[i]-i >= k && i - scnd[i] >= k) {
	        		ans.add(i);
	        	}
	        }
			
			return ans;
	    }
		public static int[] nextLargerElement(int[] arr, int n)	{ 
			Stack<Integer> stack = new Stack<>();
			int rtrn[] = new int[n];
			rtrn[n-1] = -1;
	        stack.push( n-1);
	        for( int i = n-2 ;i >= 0 ; i--){
	            int temp = arr[i];
	            int lol = -1;
	            while( !stack.isEmpty() && arr[stack.peek()] <= temp){
	            	if(arr[stack.peek()] == temp ) {
	            		lol = stack.peek();
	            	}
	                stack.pop();
	            }
	            if( stack.isEmpty()){
	            	if( lol != -1) {
	            		rtrn[i] = lol;
	            	}
	            	else {
	            		rtrn[i] = -1;
	            	}
	            }
	            else{
	            	rtrn[i] = stack.peek();
	            }
	            stack.push( i);
	        }
	        return rtrn;
		}
		public static int[] nextlargerElement(int[] arr, int n)	{ 
			Stack<Integer> stack = new Stack<>();
			int rtrn[] = new int[n];
			rtrn[0] = -1;
	        stack.add( 0);
	        for( int i = 1 ;i < n ; i++){
	            int temp = arr[i];
	            int lol = -1;
	            while( !stack.isEmpty() && arr[stack.peek()] <= temp){
	            	if(arr[stack.peek()] == temp ) {
	            		lol = stack.peek();
	            	}
	                stack.pop();
	            }
	            if( stack.isEmpty()){
	            	if( lol != -1) {
	            		rtrn[i] = lol;
	            	}
	            	else {
	            		rtrn[i] = -1;
	            	}
	            }
	            else{
	            	rtrn[i] = stack.peek();
	            }
	            stack.add( i);
	        }
	        return rtrn;
		}
		static void mysort(int[] arr) {
			for(int i=0;i<arr.length;i++) {
	            int rand = (int) (Math.random() * arr.length);
	            int loc = arr[rand];
	            arr[rand] = arr[i];
	            arr[i] = loc;
	        }
	        Arrays.sort(arr);
	    }
		
		
		static void mySort(long[] arr) {
	        for(int i=0;i<arr.length;i++) {
	            int rand = (int) (Math.random() * arr.length);
	            long loc = arr[rand];
	            arr[rand] = arr[i];
	            arr[i] = loc;
	        }
	        Arrays.sort(arr);
	    }
		
		static long gcd(long a, long b)
		{
			if (a == 0)
				return b;
			return gcd(b % a, a);
		}
		
			   
		 static long lcm(long a, long b)
		 {
			 return (a / gcd(a, b)) * b;
		 }
		 

		 static long rightmostsetbit(long n) {
			 return n&-n;
		 }
		 
		 static long leftmostsetbit(long n)
		    {
		        long k = (long)(Math.log(n) / Math.log(2));
		        return k;
		    }
	 
		 static HashMap<Long,Long> primefactor( long n){
			 HashMap<Long ,Long> hm = new HashMap<>();
			 long temp = 0;
			 while( n%2 == 0) {
				 temp++;
				 n/=2;
			 }	
			 if( temp!= 0) {
				 hm.put( 2L, temp);
			 }
			 long c = (long)Math.sqrt(n);
			 for( long i = 3 ; i <= c ; i+=2) {
				 temp = 0;
				 while( n% i == 0) {
					 temp++;
					 n/=i;
				 }
				 if( temp!= 0) {
					 hm.put( i, temp);
				 }
	 		 }
	 		 if( n!= 1) {
	 			 hm.put( n , 1L);
	 		 }
	 		 return hm;	
		 }
		 
		 
		 static TreeSet<Long> allfactors(long abs) {
			 HashMap<Long,Integer> hm = new HashMap<>();
			 TreeSet<Long> rtrn = new TreeSet<>();
			 rtrn.add(1L);
			 for( long i = 2 ;i*i <= abs; i++) {
				 if( abs% i == 0) {
					 hm.put( i , 0);
					 hm.put(abs/i, 0);
				 }
			 }
			 for( long x : hm.keySet()) {
				 rtrn.add(x);
			 }
			 
			 if( abs != 0) {
				 rtrn.add(abs);
			 }
			 
			 return rtrn;
		 }
			
		 public static int[][] prefixsum( int n , int m , int arr[][] ){
			 int prefixsum[][] = new int[n+1][m+1];
			 for( int i = 1 ;i <= n ;i++) {
				 for( int j = 1 ; j<= m ; j++) {
					 int toadd = 0;
					 if( arr[i-1][j-1] == 1) {
						 toadd = 1;
					 }
					 prefixsum[i][j] = toadd + prefixsum[i][j-1] + prefixsum[i-1][j] - prefixsum[i-1][j-1];
				 }
			 }
			 return prefixsum;
		 }
		 
		 static class FastReader {
			 BufferedReader br;
			 StringTokenizer st;
		 
			 public FastReader()
			 {
				 br = new BufferedReader(new InputStreamReader(System.in));
			 }
		        
			 String next()
			 {
				 while (st == null || !st.hasMoreElements()) {
					 try {
						 st = new StringTokenizer(br.readLine());
					 }
					 catch (IOException e) {
						 e.printStackTrace();
					 }
				 }
				  return st.nextToken();
			 }
		 
			 int nextInt() { return Integer.parseInt(next()); }
			 
			 long nextLong() { return Long.parseLong(next()); }
			 
			 double nextDouble()
			 {
				 return Double.parseDouble(next());
			 }	
		 
			 String nextLine()
			 {
				 String str = "";
				 try {
					 str = br.readLine();
				 }
				 catch (IOException e) {
					 e.printStackTrace();
				 }
				 return str;
			 }
		 }	
}