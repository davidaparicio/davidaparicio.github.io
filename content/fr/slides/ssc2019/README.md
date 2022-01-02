# Agilité et sécurité numériques: Cas concret avec la sauvegarde automatisée de Kerberos

## 19-10-08 : 3ème édition Sophia Security Camp

Kerberos est notre système d’authentification dans l’architecture BigData. Le serveur est un SPOF (Single Point of Failure). Dans le cas d’un ticket JIRA, je devais implementer un daemon LINUX pour sauvegarder les informations relatives à Kerberos, afin de pouvoir recréer au plus vite cette machine virtuelle. Ces informations étant importantes et critiques, la sécurité fût pensée dès la réalisation. En configurant un utilisateur spécifique, l’échange de clés, l’utilisation d’une autorité de confiance déjà présente, se son tune partie des techniques utilisées. Nous aborderons aussi la prise de conscience du management sur ces aspects importants. En effet, même étant sur un reseau interne d’un datacenter, nous ne sommes pas à l’abri d’une intrusion. Ainsi la menace ne peut être considérée nulle. 
