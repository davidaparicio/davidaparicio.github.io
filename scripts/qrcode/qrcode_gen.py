import qrcode

websiteurl = 'https://davidaparicio.gitlab.io'
filename = 'website.png'

versions   = 1  #1 to 40
boxsize    = 10 #nb of pixels
bordersize = 4  #min thickness of the border

#img = qrcode.make('Your input text')
img = qrcode.make()
qr = qrcode.QRCode(
    version=versions,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=boxsize,
    border=4,
)
qr.add_data(websiteurl)
qr.make(fit=True)
img = qr.make_image(fill_color="#000000", back_color="white").convert('RGB')
#img = qr.make_image(fill_color="#160096", back_color="white").convert('RGB')
img.save(filename)

#https://betterprogramming.pub/how-to-generate-and-decode-qr-codes-in-python-a933bce56fd0

""" data = { 
  'jour' : '31/05/1832',
  'heure' : '08h00',
  'nom' : 'Galois',
  'prenom' : 'Evariste',
  'naissance' : '25/11/1811',
  'lieu' : 'Bourg-la-Reine',
  'adresse' : 'Quelque part 12345 Ville',
  'motifs' : 'duel',
}

content = 'Cree le: {jour} a {heure}; Nom: {nom}; Prenom: {prenom}; '\
  + 'Naissance: a {lieu}; Adresse: {adresse}; '\
  + 'Sortie: {jour} a {heure}; Motifs: {motifs};'

qr = qrcode.QRCode(border=0)
qr.add_data(content.format(**data))
qr.make(fit=True) """