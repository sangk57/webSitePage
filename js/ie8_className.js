(function(CN){
  if( !(CN in document) ){

    document[CN] = function(cname){
      var reg = new RegExp("(^|\\s)"+ cname +"(\\s|$)"), //匹配 class 正则
      tag = this.getElementsByTagName("*"),
      elementArr = cname==="*" ? tag : []
	  
      if( !elementArr.length )	//参数不为 * , 才走节点遍历
      for (var i=0; i<tag.length; i++) {
        reg.test( tag[i].className ) && elementArr.push( tag[i] )
      }
      return elementArr
    }

    if( "Element" in window ){//IE8
      
      Element.prototype[CN] = document[CN]
    }else{//IE7 IE6

      for(var j=0; j<document.all.length; j++){
        document.all[j][CN] = document[CN]
      }
    }
  }
})( "getElementsByClassName")