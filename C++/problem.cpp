#include <bits/stdc++.h>
using namespace std;
#define ll long long

int t, n;
string s;
map <int, string> cnt;

int main () {
    cin >> t;
    while (t--) {
        cin >> n;
        cin >> s;
        cnt[0] = s[0];
        for (int i = 1; i < n; i++) cnt[i] = cnt[i - 1] + s[i];
        for (int j = 0; j < n; j++) cout << cnt[j] << endl;
    }
}