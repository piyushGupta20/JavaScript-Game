#include <iostream>
using namespace std;

int main() {
	// your code goes here
	int t;
	cin >> t;
	while(t--){
	    int a,b;
	    cin >> a >> b;
	    (a < b) ? cout << "FIRST\n" : ( (b < a) ? cout << "SECOND\n" : cout << "ANY\n" ) ;
        // this is best comment ever!!
	}
	return 0;
}
