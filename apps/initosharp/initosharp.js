 $("#btnGenerate").click(function(e){
            var lines = $('textarea').val().split('\n');
            var htmlContent = "";
            var classOpened = false;
            var rootAttr = "";

            for(var i = 0;i < lines.length;i++){
                var line = lines[i];

                if(isSection(line)){
                    if(classOpened){
                        htmlContent+="}";
                    }
                    var sec = line.replace("[", "").replace("]", "");
                    htmlContent+= ("<br/><span class='keyword'>public</span>&nbsp;");
                    htmlContent+= ("<span class='keyword'>class</span>&nbsp;");
                    htmlContent+= ("<span class='type'>" + sec + "</span>&nbsp;");
                    htmlContent+= ("<span class='newline'></span>");
                    htmlContent+= ("<br/><span class='pun'>{</span><br/>");
                    classOpened = true;

                    rootAttr+= ("<span class='double'></span><span class='keyword'>public</span>&nbsp;"
                                +"<span class='keyword'>" + sec + "</span>&nbsp;"
                                + "<span class='type'>" + sec + "</span>&nbsp;"
                                + "{&nbsp;<span class='keyword'>get</span>;&nbsp;"
                                + "&nbsp;<span class='keyword'>set</span>;&nbsp;}<br/>");
                }else if(isAttr(line)){
                    var attr = line.split("=");

                    htmlContent+= ("&nbsp;&nbsp;&nbsp;&nbsp;<span class='keyword'>public</span>&nbsp;");
                    htmlContent+= ("<span class='keyword'>" + jQuery.type(attr[1]) + "</span>&nbsp;");
                    htmlContent+= ("<span class='type'>" + attr[0] + "</span>&nbsp;");

                    htmlContent+= ("{&nbsp;<span class='keyword'>get</span>;&nbsp;");
                    htmlContent+= ("&nbsp;<span class='keyword'>set</span>;&nbsp;}<br/>");

                }

                if((i == lines.length - 1) && classOpened ){
                    htmlContent+= ("<span class='pun'>}</span><br/>");
                }
            }

            htmlContent+= ("<br/><span class='keyword'>public</span>&nbsp;");
            htmlContent+= ("<span class='keyword'>class</span>&nbsp;");
            htmlContent+= ("<span class='type'>RootObject</span>&nbsp;");
            htmlContent+= ("<span class='newline'></span>");
            htmlContent+= ("<br/><span class='pun'>{</span><br/>");
            htmlContent += rootAttr;
            htmlContent+= ("<br/><span class='double'></span><span class='keyword'>public</span>&nbsp;");
            htmlContent+= ("<span class='keyword'>static</span>&nbsp;");
            htmlContent+= ("<span class='type'>RootObject</span>&nbsp;");
            htmlContent+= ("<span class='none'>GetRootObject()</span>&nbsp;");
            htmlContent+= ("<span class='newline'></span>");
            htmlContent+= ("<br/><span class='double'><span class='pun'>{</span>");
            htmlContent+= ("<br/><span class='triple'></span><span class='keyword'>return</span>&nbsp;<span class='type'>IniConverter</span><span class='pun'>.Deserialize<RootObject>(Archive.Read('PATH GOES HERE').Content);</span><br/>");
            htmlContent+= ("<span class='double'><span class='pun'>}</span><br/>");
            htmlContent+= ("<span class='pun'>}</span><br/>");

            $("#txtResult").html(htmlContent);
        });

        function isSection(sectionLine){
            return /[[a-z]*\]/.test(sectionLine);
        }

        function isAttr(attrLine){
            return /[a-z]*=[\w]/.test(attrLine);
        }