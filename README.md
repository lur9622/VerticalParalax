# VerticalParalax
VerticalParalax.js

Include Script
<script type="text/javascript" src="js/vertical-paralax"></script>

Modify HTML(class -> paralaxImg ; data-prx-dir -> vectorOf Paralax ="L" or ="R")

<div style="background-image:url(./img/slider/bg-1.png);" class="paralaxImg" data-prx-dir="L"></div>

Modify CSS

.paralaxImg {
	width:110%;
	position:absolute;
	height:100%;
	background-size:cover;
	background-position:center;
}
