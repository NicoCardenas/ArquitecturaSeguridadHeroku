# Arquitectura Seguridad Aws
This is a web page that provides math methods to consume.

## Login Credencials
```
User: admin
Password: admin
```
## Arquitectura 
La arquitectura esta diceñada para estar distribuida en 2 servidores, el primer servidor provee la pagina web que el cliente browser mostrara, el segundo tendra de forma activa los servicios de un api rest que proveen servicios matematicos basicos.

para ver la documentacion del api rest [click aqui](https://github.com/NicoCardenas/ArquitecturaSeguridadAws/blob/master/README.md)

![deploy](https://www.draw.io/?lightbox=1&highlight=FFFFFF&edit=_blank&layers=1&nav=1&title=deployArep.drawio#R7Vpbc5s4FP41fswOiEvIY2zHzeymncy6M20fZRCgrowYWb71168EEhgEXtLYjreNHzzo6IL0fZ%2FOOZI9cibL3QcG8%2FQjjRAZASvajZzpCIDAccW3NOxLg%2BtbpSFhOCpNdm2Y4x9IGXWzNY7QqtGQU0o4zpvGkGYZCnnDBhmj22azmJLmW3OYIMMwDyExrV9wxFO1LM%2Bq7Y8IJ6l%2Bs22pmiXUjZVhlcKIbg9MzsPImTBKefm03E0QkdhpXMp%2Bs57aamIMZXxIh%2B9%2FfXBn9%2BBPsFnanz4l7n7%2B%2BekGlKNsIFmrBT8iRv9ZqynzvcZhgxjHApZ7gpNMmDjNR84YqhJBsZjDeJXDEGfJZ1k3DWrDU1E9BbXlbwWZXdhSmMvXhOsFksVSBEIBzjjCTLCKqXzJiq4lpOOYZnyuZuaKcsqXRLaXVZiQCSWUFZN24jgGYSiH5GJR6KAm8he%2B54satX6xOrTrBdau6BIyR3SJONuLJqqDJnivlavK21ovQOslPdTKnTJCpdGkGrqmUTwoJl%2FAqmOwOpqA0f34C1oI81juCsSkaSzW7xNJ3YKJp4QXiCiLNkwIlkgos5jQom7aUkk%2FFRFEQdxJhR8GaBGfhgq%2FSYXrmFTYQQcVZ2PCNZloY1apny5zmhULHX9HnO%2B1vwm0oXI07lC0%2BtXRC6FtircDMG1jiECON01n2YWiet8zxVJK%2BmU34LZB2G1zABrHK8QNEqpJ%2FzwvnsHLvYgU705v8E6rttYxr%2Bdf1OsFPV5vnjMBvnR8MtYO9XozRrPopU6vWzAtgnwL3tm3XQSB6a1vWYrtJqXicyLiWry5HbxZXbw55%2BLt7gp9ZPDuI29sg5cyf3iWKfMQhrodpfKLzmBH9BMEtUTudaQBXYz555K4Ps28%2B6bjtPlX55xscxe8vXeyraMw%2Fh7uyTeI%2BSiP3MB6ogkO39xB%2FQdHV%2BehBpxUGF1nEZKjSD9AGU9pQjNInmiR%2B9pa5eoWB645bWaqKIvu5Z2MKGaCg9Iyw3KmxZBoh%2FlX%2BfyHp0rfdE%2FxPN0dNJvudSETyy87%2Bbr4rSgCXaw7FqVGz2fEsEAQMW2MEqTz7HqFD7VVSUK2awiCQ5ago4Lwe9yhwJiuWYheHu1euXUdr6FBJ2iJq5yW6nR4s9QaxwXNcdoiLaExxjlZnmIe5s4q3RSSeIJZSDoEnOkrTL%2BKoToI2L0Ct44L%2FCoV2XOJ8EpFtuK%2F53qDFHkyJZkxxVCSGAbnKwn7NsUczUXMkDVbBvPWsVzkSTO4xEQu5hGRDZLplz7Kq%2BM%2BMBMqq%2FgcRKdQkCP9k5mTVU3NK4AyJ8slUgV23njkTeWgq7y8Jo%2FxTu6HMUMr%2FAMuiuVZp0njgiaLlT84DG5dSdzZYpt5wnzkPDfve8SSeZPENjodgApXoS9vzJSiO%2BluXBndDM4Fj6Ne3cBo2D3PgN09kgeeHHbQcei5fEpx4D0RWdDtKRynXsj1hHLwto4TDDglXSwEV%2Fmg18wHq2JvPjgweB%2BG7iqQXzp4v0aDfWeT%2F3f01oi8R%2B9XxRGndTQFHZcwFw3fwPw58xcM3077B5W7s4VvUaz%2FdlDuvvq%2FG87Dvw%3D%3D)

----
### To create a keystore with keytool use the next command:
#### JKS KEY
```
keytool -genkey -alias AwsApp -keyalg RSA -keypass changeit -storepass changeit -keystore keystore.jks
```
#### PKCS12 KEY
```
keytool -genkeypair -alias AwsApp -keyalg RSA -keypass changeit -storepass changeit -keysize 2048 -storetype PKCS12 -keystore keystore.p12 -validity 3650
```
### **Note:** The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using:
```
keytool -importkeystore -srckeystore keystore.jks -destkeystore keystore.jks -deststoretype pkcs12
```
### Export the generated server certificate in keystore.jks into the file server.cer
```
keytool -export -alias server-alias -storepass changeit -file certificate.cer -keystore keystore.jks
```
### 
```
keytool -import -v -trustcacerts -alias AwsApp -file certificate.cer -keystore cacerts.jks -keypass changeit -storepass changeit
```