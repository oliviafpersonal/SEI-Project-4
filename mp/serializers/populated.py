from comments.serializers.common import CommentSerializer
from ..serializers.common import MpSerializer 
from party.serializers.common import partySerializer

class PopulatedMpSerializer(MpSerializer):
    comments = CommentSerializer(many=True)
    party = partySerializer(many=True)