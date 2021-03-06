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

![deploy](/images/deployArep.png)

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