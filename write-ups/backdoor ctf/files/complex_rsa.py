from Crypto.PublicKey import RSA

with open('pubkey1','rb') as f1 :
	key1 = RSA.importKey(f1.read())
with open('pubkey2','rb') as f2 :
	key2 = RSA.importKey(f2.read())

# both public key have same n
#print key1.n
# * Concept
# * m^e1 mod(n) = c1
# * c1^e2 mod(n) = c2
# * flag.enc contains c2
# * since we have same n
# * c2 = m^(e1*e2) mod(n)
# * now we have n, e = e1*e2
# * this time 

n = key1.n
e = key1.e * key2.e
def pow_mod(x, y, z):
    #"Calculate (x ** y) % z efficiently."
    number = 1
    while y:
        if y & 1:
            number = number * x % z
        y >>= 1
        x = x * x % z
    return number

with open('flag.enc','rb') as f :
	cipher = f.read()
cipher = int(cipher.encode('hex'),16)
print n
print e
print cipher

# now use tool attackrsa
# attackrsa -t wiener -n N -e E -c C
# ======== OUTPUT =========
# d = 0x3a2709b4be67703731c4d00a680975ab0f9f1523cfcd938a3ea98147be1fb96bL
# p = 0x27748ad5759f37632cb32fe8cb074e45ebba7017a26bdd5713605a5ccfb61eb2ea02560795535d3c1d1b5b2a8997e35a6e02058d291493688d04feaec8333711f
# q = 0x1401430d81b39ffccf3c83c6b2e4b65e0d11d252d8080a2f85597b2daaee76a8e53effdc645457ba56a0dff15a93faa63da610a3ebfc354431c7bcb2d6bc7eda1
# m = 0x4354467b63306e367234377a7a7a5f7930755f6630756e645f3075725f68316464336e5f7731336e337221217dL
# CTF{c0n6r47zzz_y0u_f0und_0ur_h1dd3n_w13n3r!!}