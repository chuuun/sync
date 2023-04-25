import{b as $,i as y,m as D,G,l as j}from"./layout-606ac56e.js";import{i as A,u as M,s as _,a as V,b as q,p as B,c as H,d as U,e as W,f as Y,g as O,h as E}from"./edges-65da65dc-b865db07.js";import{l as i,q as X,c as C,h as J}from"./mermaid.core-49dc6b4b.js";var z=4;function K(e){return $(e,z)}function v(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:Q(e),edges:Z(e)};return y(e.graph())||(t.value=K(e.graph())),t}function Q(e){return D(e.nodes(),function(t){var n=e.node(t),r=e.parent(t),s={v:t};return y(n)||(s.value=n),y(r)||(s.parent=r),s})}function Z(e){return D(e.edges(),function(t){var n=e.edge(t),r={v:t.v,w:t.w};return y(t.name)||(r.name=t.name),y(n)||(r.value=n),r})}let d={},x={},L={};const I=()=>{x={},L={},d={}},N=(e,t)=>(i.trace("In isDecendant",t," ",e," = ",x[t].includes(e)),!!x[t].includes(e)),tt=(e,t)=>(i.info("Decendants of ",t," is ",x[t]),i.info("Edge is ",e),e.v===t||e.w===t?!1:x[t]?x[t].includes(e.v)||N(e.v,t)||N(e.w,t)||x[t].includes(e.w):(i.debug("Tilt, ",t,",not in decendants"),!1)),R=(e,t,n,r)=>{i.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const s=t.children(e)||[];e!==r&&s.push(e),i.warn("Copying (nodes) clusterId",e,"nodes",s),s.forEach(c=>{if(t.children(c).length>0)R(c,t,n,r);else{const f=t.node(c);i.info("cp ",c," to ",r," with parent ",e),n.setNode(c,f),r!==t.parent(c)&&(i.warn("Setting parent",c,t.parent(c)),n.setParent(c,t.parent(c))),e!==r&&c!==e?(i.debug("Setting parent",c,e),n.setParent(c,e)):(i.info("In copy ",e,"root",r,"data",t.node(e),r),i.debug("Not Setting parent for node=",c,"cluster!==rootId",e!==r,"node!==clusterId",c!==e));const l=t.edges(c);i.debug("Copying Edges",l),l.forEach(u=>{i.info("Edge",u);const h=t.edge(u.v,u.w,u.name);i.info("Edge data",h,r);try{tt(u,r)?(i.info("Copying as ",u.v,u.w,h,u.name),n.setEdge(u.v,u.w,h,u.name),i.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):i.info("Skipping copy of edge ",u.v,"-->",u.w," rootId: ",r," clusterId:",e)}catch(g){i.error(g)}})}i.debug("Removing node",c),t.removeNode(c)})},T=(e,t)=>{const n=t.children(e);let r=[...n];for(const s of n)L[s]=e,r=[...r,...T(s,t)];return r},b=(e,t)=>{i.trace("Searching",e);const n=t.children(e);if(i.trace("Searching children of id ",e,n),n.length<1)return i.trace("This is a valid node",e),e;for(const r of n){const s=b(r,t);if(s)return i.trace("Found replacement for",e," => ",s),s}},m=e=>!d[e]||!d[e].externalConnections?e:d[e]?d[e].id:e,et=(e,t)=>{if(!e||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(i.warn("Cluster identified",n," Replacement id in edges: ",b(n,e)),x[n]=T(n,e),d[n]={id:b(n,e),clusterData:e.node(n)})}),e.nodes().forEach(function(n){const r=e.children(n),s=e.edges();r.length>0?(i.debug("Cluster identified",n,x),s.forEach(c=>{if(c.v!==n&&c.w!==n){const f=N(c.v,n),l=N(c.w,n);f^l&&(i.warn("Edge: ",c," leaves cluster ",n),i.warn("Decendants of XXX ",n,": ",x[n]),d[n].externalConnections=!0)}})):i.debug("Not a cluster ",n,x)}),e.edges().forEach(function(n){const r=e.edge(n);i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let s=n.v,c=n.w;if(i.warn("Fix XXX",d,"ids:",n.v,n.w,"Translating: ",d[n.v]," --- ",d[n.w]),d[n.v]&&d[n.w]&&d[n.v]===d[n.w]){i.warn("Fixing and trixing link to self - removing XXX",n.v,n.w,n.name),i.warn("Fixing and trixing - removing XXX",n.v,n.w,n.name),s=m(n.v),c=m(n.w),e.removeEdge(n.v,n.w,n.name);const f=n.w+"---"+n.v;e.setNode(f,{domId:f,id:f,labelStyle:"",labelText:r.label,padding:0,shape:"labelRect",style:""});const l=JSON.parse(JSON.stringify(r)),u=JSON.parse(JSON.stringify(r));l.label="",l.arrowTypeEnd="none",u.label="",l.fromCluster=n.v,u.toCluster=n.v,e.setEdge(s,f,l,n.name+"-cyclic-special"),e.setEdge(f,c,u,n.name+"-cyclic-special")}else(d[n.v]||d[n.w])&&(i.warn("Fixing and trixing - removing XXX",n.v,n.w,n.name),s=m(n.v),c=m(n.w),e.removeEdge(n.v,n.w,n.name),s!==n.v&&(r.fromCluster=n.v),c!==n.w&&(r.toCluster=n.w),i.warn("Fix Replacing with XXX",s,c,n.name),e.setEdge(s,c,r,n.name))}),i.warn("Adjusted Graph",v(e)),P(e,0),i.trace(d)},P=(e,t)=>{if(i.warn("extractor - ",t,v(e),e.children("D")),t>10){i.error("Bailing out");return}let n=e.nodes(),r=!1;for(const s of n){const c=e.children(s);r=r||c.length>0}if(!r){i.debug("Done, no node has children",e.nodes());return}i.debug("Nodes = ",n,t);for(const s of n)if(i.debug("Extracting node",s,d,d[s]&&!d[s].externalConnections,!e.parent(s),e.node(s),e.children("D")," Depth ",t),!d[s])i.debug("Not a cluster",s,t);else if(!d[s].externalConnections&&e.children(s)&&e.children(s).length>0){i.warn("Cluster without external connections, without a parent and with children",s,t);let f=e.graph().rankdir==="TB"?"LR":"TB";d[s]&&d[s].clusterData&&d[s].clusterData.dir&&(f=d[s].clusterData.dir,i.warn("Fixing dir",d[s].clusterData.dir,f));const l=new G({multigraph:!0,compound:!0}).setGraph({rankdir:f,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",v(e)),R(s,e,l,s),e.setNode(s,{clusterNode:!0,id:s,clusterData:d[s].clusterData,labelText:d[s].labelText,graph:l}),i.warn("New graph after copy node: (",s,")",v(l)),i.debug("Old graph after copy",v(e))}else i.warn("Cluster ** ",s," **not meeting the criteria !externalConnections:",!d[s].externalConnections," no parent: ",!e.parent(s)," children ",e.children(s)&&e.children(s).length>0,e.children("D"),t),i.debug(d);n=e.nodes(),i.warn("New list of nodes",n);for(const s of n){const c=e.node(s);i.warn(" Now next level",s,c),c.clusterNode&&P(c.graph,t+1)}},p=(e,t)=>{if(t.length===0)return[];let n=Object.assign(t);return t.forEach(r=>{const s=e.children(r),c=p(e,s);n=[...n,...c]}),n},nt=e=>p(e,e.children()),it=(e,t)=>{i.trace("Creating subgraph rect for ",t.id,t);const n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=n.insert("rect",":first-child"),s=n.insert("g").attr("class","cluster-label"),c=s.node().appendChild(O(t.labelText,t.labelStyle,void 0,!0));let f=c.getBBox();if(X(C().flowchart.htmlLabels)){const a=c.children[0],o=J(c);f=a.getBoundingClientRect(),o.attr("width",f.width),o.attr("height",f.height)}const l=0*t.padding,u=l/2,h=t.width<=f.width+l?f.width+l:t.width;t.width<=f.width+l?t.diff=(f.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,i.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-h/2).attr("y",t.y-t.height/2-u).attr("width",h).attr("height",t.height+l),s.attr("transform","translate("+(t.x-f.width/2)+", "+(t.y-t.height/2)+")");const g=r.node().getBBox();return t.width=g.width,t.height=g.height,t.intersect=function(a){return E(t,a)},n},st=(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),s=0*t.padding,c=s/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-c).attr("y",t.y-t.height/2-c).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");const f=r.node().getBBox();return t.width=f.width,t.height=f.height,t.intersect=function(l){return E(t,l)},n},rt=(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),s=n.insert("g").attr("class","cluster-label"),c=n.append("rect"),f=s.node().appendChild(O(t.labelText,t.labelStyle,void 0,!0));let l=f.getBBox();if(X(C().flowchart.htmlLabels)){const o=f.children[0],w=J(f);l=o.getBoundingClientRect(),w.attr("width",l.width),w.attr("height",l.height)}l=f.getBBox();const u=0*t.padding,h=u/2,g=t.width<=l.width+t.padding?l.width+t.padding:t.width;t.width<=l.width+t.padding?t.diff=(l.width+t.padding*0-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-g/2-h).attr("y",t.y-t.height/2-h).attr("width",g+u).attr("height",t.height+u),c.attr("class","inner").attr("x",t.x-g/2-h).attr("y",t.y-t.height/2-h+l.height-1).attr("width",g+u).attr("height",t.height+u-l.height-3),s.attr("transform","translate("+(t.x-l.width/2)+", "+(t.y-t.height/2-t.padding/3+(X(C().flowchart.htmlLabels)?5:3))+")");const a=r.node().getBBox();return t.height=a.height,t.intersect=function(o){return E(t,o)},n},ct=(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),s=0*t.padding,c=s/2;r.attr("class","divider").attr("x",t.x-t.width/2-c).attr("y",t.y-t.height/2).attr("width",t.width+s).attr("height",t.height+s);const f=r.node().getBBox();return t.width=f.width,t.height=f.height,t.diff=-t.padding/2,t.intersect=function(l){return E(t,l)},n},at={rect:it,roundedWithTitle:rt,noteGroup:st,divider:ct};let F={};const ot=(e,t)=>{i.trace("Inserting cluster");const n=t.shape||"rect";F[t.id]=at[n](e,t)},lt=()=>{F={}},k=(e,t,n,r)=>{i.info("Graph in recursive render: XXX",v(t),r);const s=t.graph().rankdir;i.trace("Dir in recursive render - dir:",s);const c=e.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.trace("Recursive edges",t.edge(t.edges()[0]));const f=c.insert("g").attr("class","clusters"),l=c.insert("g").attr("class","edgePaths"),u=c.insert("g").attr("class","edgeLabels"),h=c.insert("g").attr("class","nodes");t.nodes().forEach(function(a){const o=t.node(a);if(r!==void 0){const w=JSON.parse(JSON.stringify(r.clusterData));i.info("Setting data for cluster XXX (",a,") ",w,r),t.setNode(r.id,w),t.parent(a)||(i.trace("Setting parent",a,r.id),t.setParent(a,r.id,w))}if(i.info("(Insert) Node XXX"+a+": "+JSON.stringify(t.node(a))),o&&o.clusterNode){i.info("Cluster identified",a,o.width,t.node(a));const w=k(h,o.graph,n,t.node(a)),S=w.elem;M(o,S),o.diff=w.diff||0,i.info("Node bounds (abc123)",a,o,o.width,o.x,o.y),_(S,o),i.warn("Recursive render complete ",S,o)}else t.children(a).length>0?(i.info("Cluster - the non recursive path XXX",a,o.id,o,t),i.info(b(o.id,t)),d[o.id]={id:b(o.id,t),node:o}):(i.info("Node - the non recursive path",a,o.id,o),V(h,t.node(a),s))}),t.edges().forEach(function(a){const o=t.edge(a.v,a.w,a.name);i.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(a)),i.info("Edge "+a.v+" -> "+a.w+": ",a," ",JSON.stringify(t.edge(a))),i.info("Fix",d,"ids:",a.v,a.w,"Translateing: ",d[a.v],d[a.w]),q(u,o)}),t.edges().forEach(function(a){i.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(a))}),i.info("#############################################"),i.info("###                Layout                 ###"),i.info("#############################################"),i.info(t),j(t),i.info("Graph after layout:",v(t));let g=0;return nt(t).forEach(function(a){const o=t.node(a);i.info("Position "+a+": "+JSON.stringify(t.node(a))),i.info("Position "+a+": ("+o.x,","+o.y,") width: ",o.width," height: ",o.height),o&&o.clusterNode?B(o):t.children(a).length>0?(ot(f,o),d[o.id].node=o):B(o)}),t.edges().forEach(function(a){const o=t.edge(a);i.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(o),o);const w=H(l,a,o,d,n,t);U(o,w)}),t.nodes().forEach(function(a){const o=t.node(a);i.info(a,o.type,o.diff),o.type==="group"&&(g=o.diff)}),{elem:c,diff:g}},ht=(e,t,n,r,s)=>{A(e,n,r,s),W(),Y(),lt(),I(),i.warn("Graph at first:",v(t)),et(t),i.warn("Graph after:",v(t)),k(e,t,r)};export{ht as r};
