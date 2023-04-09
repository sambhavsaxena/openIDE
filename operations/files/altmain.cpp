// Author: Sambhav Saxena

/*

 ------------------------FOR TLE------------------------

MAX value of N                    Time complexity
10^9                              O(logN) or sqrt(N)
10^8                              O(N) Edge fit
10^7                              O(N) Partial fit
10^6                              O(N) Best fit
10^5                              O(NlogN)
10^4                              O(N ^ 2)
10^2                              O(N ^ 3)
<= 160                            O(N ^ 4)
<= 18                             O(2 ^ N * N ^ 2)
<= 10                             O(N!), O(2 ^ N)
Upper Case                        65 - 90
Lower Case                        97 - 122
Numbers                           48 - 57

*/

// ------------------------DEFINITIONS & INCLUSIONS------------------------

#include <bits/stdc++.h>
// #pragma comment(linker, "/STACK:36777216")//For unbounded call stack
#define MOD 1000000007
#define PI 3.141592653589793238462
#define ln 1e6
#define ll long long
#define ld long double
#define loop(i, a, b) for (ll i = a; i < b; ++i)
#define loopr(i, a, b) for (ll i = b; i >= a; i--)
#define loopx for (ll i = 0; i < n; ++i)
#define trav(a, b) for (auto &a : b)
#define all(x) x.begin(), x.end()
#define mid(l, r) (l + (r - l / 2))
#define binpow(n, i) n << i
#define vl vector<ll>
#define pl pair<ll, ll>
#define vp vector<pair<ll, ll>>
#define ml map<ll, ll>
#define sl set<ll>
#define ff first
#define ss second
#define pb push_back
#define ppb pop_back
#define mp make_pair
#define precised showpoint << fixed << setprecision(10)
#define mx(x) max_element(all(x))
#define mn(x) min_element(all(x))
#define stringify(x) to_string(x)
#define intify(x) stoi(x)
#define endl '\n'
#define set_bits(x) __builtin_popcount(x)
#define parity(x) __builtin_parity(x)
#define clz(x) __builtin_clz(x)
#define ctz(x) __builtin_ctz(x)
#define next_power_of_2(x) (1 << (int)ceil(log2(x)))
#define next_permutation(x) next_permutation(all(x))
#define prev_permutation(x) prev_permutation(all(x))
#define checksorted(v) is_sorted(v.begin(), v.end())
#define gcd(a, b) __gcd(a, b)
#define lcm(a, b) (a * b) / __gcd(a, b)
#define sorta(arr, n) sort(arr, arr + n)
#define sortar(arr, n) sort(arr, arr + n, greater<ll>())
#define sortv(x) sort(x.begin(), x.end())
#define sortvr(x) sort(x.begin(), x.end(), greater<ll>())
#define debug(x) cerr << ": " << x << endl
#define _     \
    ll $;     \
    cin >> $; \
    while ($--)

using namespace std;

// ------------------------FUNCTIONS------------------------

bool isVowel(char a)
{
    return (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u');
}

bool isPowerOfTwo(ll n)
{
    if (n == 0)
        return false;
    return (ceil(log2(n)) == floor(log2(n)));
}

bool isPrime(ll n)
{
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (ll i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
}

bool isSquare(ll n)
{
    ll x = sqrt(n);
    return (x * x == n);
}

ll binarysearch(vl v, ll key)
{
    ll l = 0, r = v.size() - 1;
    while (l <= r)
    {
        ll m = l + (r - l) / 2;
        if (v[m] == key)
            return m;
        else if (v[m] < key)
            l = m + 1;
        else
            r = m - 1;
    }
    return -1;
}

ll nCr(ll n, ll r)
{
    if (n < r)
        return 0;
    if (r > n - r)
        r = n - r;
    ll ans = 1;
    for (ll i = 0; i < r; i++)
    {
        ans *= (n - i);
        ans /= (i + 1);
    }
    return ans;
}

ll nPr(ll n, ll r)
{
    if (n < r)
        return 0;
    ll ans = 1;
    for (ll i = 0; i < r; i++)
        ans *= (n - i);
    return ans;
}

ll modmultiplication(ll a, ll b)
{
    a %= MOD;
    ll res = 0;
    while (b > 0)
    {
        if (b & 1)
            res = (res + a) % MOD;
        a = (2 * a) % MOD;
        b >>= 1;
    }
    return res;
}

ll modexpo(ll x, ll p)
{
    x %= MOD;
    ll res = 1;
    while (p > 0)
    {
        if (p & 1)
            res = res * x % MOD;
        x = x * x % MOD;
        p >>= 1;
    }
    return res;
}

ll modInverse(ll n)
{
    return modexpo(n, MOD - 2);
}

bool palindrome(string &s)
{
    string t = s;
    reverse(all(t));
    return t == s;
}

vector<ll> sieve(ll n)
{
    vector<bool> prime(n + 1, true);
    vector<ll> primes;
    for (ll p = 2; p * p <= n; p++)
    {
        if (prime[p])
        {
            for (ll i = p * 2; i <= n; i += p)
            {
                prime[i] = false;
            }
        }
    }
    for (ll p = 2; p <= n; p++)
    {
        if (prime[p])
        {
            primes.push_back(p);
        }
    }
    return primes;
}

ll lis(vector<ll> &a)
{
    ll n = a.size();
    vector<ll> dp(n, 1);
    for (ll i = 1; i < n; i++)
    {
        for (ll j = 0; j < i; j++)
        {
            if (a[i] > a[j])
            {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
    }
    return *max_element(all(dp));
}

ll mre(vector<ll> &a)
{

    ll n = a.size(), max = 0, id = -1;
    loop(i, 0, n)
    {
        a[a[i] % n] += n;
    }
    loop(i, 0, n)
    {
        if (a[i] / n > max)
        {
            max = a[i] / n;
            id = i;
        }
    }
    return id;
}

bool sortsec(const pl &a, const pl &b)
{
    return (a.second < b.second);
}

template <typename T>
void printv(vector<T> &v)
{
    for (auto &i : v)
    {
        cout << i << " ";
    }
    cout << endl;
}

// ------------------------SOLUTION------------------------

void fn()
{
}

// ------------------------INITIALIZATION------------------------

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    freopen("error.txt", "w", stderr);
#endif
    _ fn();
    cerr << "Time taken : " << (float)clock() / CLOCKS_PER_SEC << " seconds" << endl;
    // for (ll i = 0; i < t; i++) // For kickstart
    //{
    //	cout << "Case #" << i + 1 << ": ";
    //	fn();
    // cout<<endl;
    // }
    return 0;
}

/*
world's a hell Thee made in oath;
truth the lies and lies lay forth;
*/
