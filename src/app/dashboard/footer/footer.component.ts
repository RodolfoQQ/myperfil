import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email:string='123rod123@gamil.com'
  telf:string='982401884'
  imgs=['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png',
    'https://th.bing.com/th/id/R.5be5fbcb55c0d12f61f03fd603c2ddd2?rik=XRGnhkgM5j9UnA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fwhatsapp-hd-png-whatsapp-logo-png-1000.png&ehk=oQrbrzYutw1gKvWMMfOAQIfVxxTgIrC8qo7KFEG2NeE%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.e80048be84cfe35cc89dda88c1fd647c?rik=%2fZ%2bSfqwkbIoLFw&riu=http%3a%2f%2finformaticarobledo.com.ar%2fwp-content%2fuploads%2f2018%2f09%2fInstagram.png&ehk=hXCC%2bObTFXkeTcQtMjnHXCHZmIJS48j6sYLj6I6p7cs%3d&risl=&pid=ImgRaw&r=0'
  ]


}
