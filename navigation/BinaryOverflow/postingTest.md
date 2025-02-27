---
layout: page
permalink: /postingTest
---

<div  id="postDivBox"><p>tehe</p></div>

<script type="module">
    import {buildPostBox} from '{{site.baseurl}}/navigation/BinaryOverflow/postingTest.js'

    const div = buildPostBox();
    const postDivBox = document.getElementById("postDivBox")
    postDivBox.append(div)
</script>